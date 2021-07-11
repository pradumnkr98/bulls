package in.ongrid.Perdun.model.dto;

public class ExperienceDetailsDTO {

    private String organisationName;

    private String startDate;

    private String endDate;


    public ExperienceDetailsDTO(){};
    public ExperienceDetailsDTO(String organisationName, String startDate, String endDate) {
        this.organisationName = organisationName;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getOrganisationName() {
        return organisationName;
    }

    public void setOrganisationName(String organisationName) {
        this.organisationName = organisationName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
