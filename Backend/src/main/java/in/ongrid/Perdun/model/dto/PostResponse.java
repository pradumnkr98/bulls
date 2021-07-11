package in.ongrid.Perdun.model.dto;

import java.util.Date;

public class PostResponse {

    private Long id;
    private Date created;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public PostResponse(Long id, Date created) {
        this.id = id;
        this.created = created;
    }

    public PostResponse(){}
}
