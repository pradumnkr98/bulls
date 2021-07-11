package in.ongrid.Perdun.model.dto;

public class SearchResponse {
    String Name;
    Long Id;
    String profilePictureUrl;

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public SearchResponse(String name, Long id, String profilePictureUrl) {
        Name = name;
        Id = id;
        this.profilePictureUrl = profilePictureUrl;
    }

    public SearchResponse(){}
    public SearchResponse(String name, Long id) {
        Name = name;
        Id = id;
    }
}
