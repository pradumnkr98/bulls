package in.ongrid.Perdun.model.dto;

public class UserProfileResponse {

    private Long id;
    private String name;
    private String dob;
    private String portfolioUrl;
    private String profilePictureUrl;

    private EducationDetailsDTO educationDetails;

    private ExperienceDetailsDTO experienceDetails;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPortfolioUrl() {
        return portfolioUrl;
    }

    public void setPortfolioUrl(String portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public EducationDetailsDTO getEducationDetails() {
        return educationDetails;
    }

    public void setEducationDetails(EducationDetailsDTO educationDetails) {
        this.educationDetails = educationDetails;
    }

    public ExperienceDetailsDTO getExperienceDetails() {
        return experienceDetails;
    }

    public void setExperienceDetails(ExperienceDetailsDTO experienceDetails) {
        this.experienceDetails = experienceDetails;
    }

    public UserProfileResponse(){}

    public UserProfileResponse(Long id, String name, String dob, String portfolioUrl, String profilePictureUrl, EducationDetailsDTO educationDetails, ExperienceDetailsDTO experienceDetails) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.portfolioUrl = portfolioUrl;
        this.profilePictureUrl = profilePictureUrl;
        this.educationDetails = educationDetails;
        this.experienceDetails = experienceDetails;
    }
}
