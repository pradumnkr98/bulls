package in.ongrid.Perdun.model.dto;

import in.ongrid.Perdun.model.entity.Posts;

import java.util.List;

public class GetPostsResponse{

    List<PostResponseDetails> postsList;

    public List<PostResponseDetails> getPostsList() {
        return postsList;
    }

    public void setPostsList(List<PostResponseDetails> postsList) {
        this.postsList = postsList;
    }


    public GetPostsResponse(List<PostResponseDetails> postsList) {
        this.postsList = postsList;
    }

    public GetPostsResponse(){}
}
