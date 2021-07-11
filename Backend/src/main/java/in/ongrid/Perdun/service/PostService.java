package in.ongrid.Perdun.service;

import in.ongrid.Perdun.model.dto.*;

import java.util.List;

public interface PostService {

     PostResponse createPost(PostRequest postRequest);

     CommentResponse postComment(Long id, CommentRequest commentRequest);

     LikeResponse like(Long id, LikeRequest likeRequest);

     GetPostsResponse getPosts(Long id);

     List<CommentResponse> getAllComments(Long id);
}
