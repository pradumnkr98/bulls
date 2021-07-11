package in.ongrid.Perdun.service;

import in.ongrid.Perdun.dao.CommentsRepository;
import in.ongrid.Perdun.dao.LikesRepository;
import in.ongrid.Perdun.dao.PostsRepository;
import in.ongrid.Perdun.dao.UsersRepository;
import in.ongrid.Perdun.model.dto.*;
import in.ongrid.Perdun.model.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostsRepository postsRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    CommentsRepository commentsRepository;

    @Autowired
    LikesRepository likesRepository;

    @Override
    public PostResponse createPost(PostRequest postRequest) {

        if(postRequest.getUserId() == null){
            throw new IllegalArgumentException("Invalid User");
        }

        Users user = usersRepository.getById(postRequest.getUserId());

        if(user == null){
            throw new IllegalArgumentException("User doesn't exist");
        }
        /*Mapping fields from post Request to Post Entity*/

        Posts post = new Posts(postRequest.getText(), postRequest.getImageUrl(), user);
        postsRepository.save(post);

        PostResponse postResponse = new PostResponse();
        postResponse.setId(post.getId());

        return postResponse;
    }

    @Override
    public CommentResponse postComment(Long id, CommentRequest commentRequest) {
        CommentResponse response = new CommentResponse();

        if(id == null){
            throw new IllegalArgumentException("Id can not be Null");
        }

        if(commentRequest.getUserId() == null){
            throw new IllegalArgumentException("Invalid User.");
        }

        if(commentRequest.getComment() == null || commentRequest.getComment().isEmpty()){
            throw new IllegalArgumentException("Comment can not be Null.");
        }

        Long userId = commentRequest.getUserId();
        Comments comment = new Comments();

        Users user = usersRepository.getById(userId);
        Posts post = postsRepository.getById(id);

        if(user == null){
            throw new IllegalArgumentException("User Doesn't exist.");
        }

        comment.setComment(commentRequest.getComment());
        comment.setUser(user);
        comment.setPost(post);
        commentsRepository.save(comment);

        response.setComment(comment.getComment());
        response.setCommentBy(user.getName());
        response.setId(comment.getId());

        return response;
    }

    @Override
    public LikeResponse like(Long id, LikeRequest likeRequest) {

        if(id == null){
            throw new IllegalArgumentException("Id can not be Null.");
        }

        if(likeRequest.getUserId() == null){
            throw new IllegalArgumentException("Invalid User.");
        }

        Users user = usersRepository.getById(likeRequest.getUserId());

        if(user == null){
            throw new IllegalArgumentException("User Doesn't exist.");
        }

        Posts post = postsRepository.getById(id);

        if(likesRepository.findByUsersAndPosts(user, post) != null){
            throw new IllegalArgumentException("You have already liked the post.");
        }

        Likes like = new Likes(user,post);
        likesRepository.save(like);

        List<Likes> likesList = likesRepository.findAllByPosts(post);

        return new LikeResponse(id,(long) likesList.size());
    }

    @Override
    public GetPostsResponse getPosts(Long id) {


        if(id == null){
            throw new IllegalArgumentException("Id can not be null");
        }

        List<PostResponseDetails> allPost = new ArrayList<>();

        Set<Posts> postsList = postsRepository.getAll(id);

        for(Posts p : postsList){
            Long likes = (long)likesRepository.findAllByPosts(p).size();

            PostResponseDetails postResponseDetails=new PostResponseDetails( p.getUsers().getId(),
                    p.getUsers().getName(), p.getImageUrl(), p.getText(), p.getId(), likes, p.getUsers().getProfilePictureUrl());

            allPost.add(postResponseDetails);
        }

        GetPostsResponse getPostsResponse=new GetPostsResponse();
        getPostsResponse.setPostsList(allPost);
        return getPostsResponse;
    }

    @Override
    public List<CommentResponse> getAllComments(Long id) {

        if(id == null){
            throw new IllegalArgumentException("Post doesn't exist");
        }

        Posts post = postsRepository.getById(id);

        List<Comments> comments = commentsRepository.findAllByPost(post);
        if(comments == null){
            throw new IllegalArgumentException("No comments.");
        }

        List<CommentResponse> commentResponses = new ArrayList<>();

        for (Comments com : comments) {

            Date current = new Date();
            long diffInMillies = Math.abs(current.getTime() - com.getCreated().getTime());
            long days = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
            long hours = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
            long min = TimeUnit.MINUTES.convert(diffInMillies, TimeUnit.MILLISECONDS);
            long seconds = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);

            String createdAt = (seconds <=60 ? seconds +" " + "seconds ago":(min <=60)? min +" "+"minutes ago":(hours<=24)?hours+" "+"hours ago":(days+ " days ago"));

            CommentResponse commentResponse = new CommentResponse(com.getId(),com.getComment(),
                    com.getUser().getName(), createdAt, com.getUser().getProfilePictureUrl());
            commentResponses.add(commentResponse);
        }

        return commentResponses;
    }
}
