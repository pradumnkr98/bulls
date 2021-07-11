package in.ongrid.Perdun.model.dto;

public class UpdateUserProfileResponse {
    Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UpdateUserProfileResponse(Long id) {
        this.id = id;
    }
}
