package in.ongrid.Perdun.controller;

import in.ongrid.Perdun.model.dto.*;
import in.ongrid.Perdun.service.PostServiceImpl;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostServiceImpl postServiceImpl;

    @PostMapping("")
    public BaseResponse<PostResponse> createPost(@RequestBody PostRequest postRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success",postServiceImpl.createPost(postRequest));
    }

    @PostMapping("/{postId}/comments")
    public BaseResponse<CommentResponse> postComment(@PathVariable("postId") Long postId, @RequestBody CommentRequest commentRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success",postServiceImpl.postComment(postId,commentRequest));
    }

    @PostMapping("/{postId}/like")
    public BaseResponse<LikeResponse> like(@PathVariable("postId") Long id,@RequestBody LikeRequest likeRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success",postServiceImpl.like(id,likeRequest));
    }

    @GetMapping("/{userId}")
    public BaseResponse<GetPostsResponse> getPosts(@PathVariable("userId") Long userId) {

        return new BaseResponse<>(HttpStatus.SC_OK,"Success",postServiceImpl.getPosts(userId));
    }

    @GetMapping("/{id}/comments")
    public BaseResponse<List<CommentResponse>> getAllComments(@PathVariable("id") Long id){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success",postServiceImpl.getAllComments(id));
    }
}
