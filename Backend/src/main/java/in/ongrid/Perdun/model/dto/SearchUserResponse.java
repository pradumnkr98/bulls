package in.ongrid.Perdun.model.dto;

import java.util.List;

public class SearchUserResponse {

    private List<SearchResponse> usersList;

    public List<SearchResponse> getUsersList() {
        return usersList;
    }

    public void setUsersList(List<SearchResponse> usersList) {
        this.usersList = usersList;
    }

    public SearchUserResponse(){}
    public SearchUserResponse(List<SearchResponse> usersList) {
        this.usersList = usersList;
    }
}
