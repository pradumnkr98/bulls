package in.ongrid.Perdun.model.dto;

public class EducationDetailsDTO {

    private String degreeName;

    private String major;

    private String institutionName;

    private Long marks;

    private String startDate;

    private String endDate;

    public EducationDetailsDTO(){};

    public EducationDetailsDTO(String degreeName, String major, String institutionName, Long marks, String startDate, String endDate) {
        this.degreeName = degreeName;
        this.major = major;
        this.institutionName = institutionName;
        this.marks = marks;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getDegreeName() {
        return degreeName;
    }

    public void setDegreeName(String degreeName) {
        this.degreeName = degreeName;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getInstitutionName() {
        return institutionName;
    }

    public void setInstitutionName(String institutionName) {
        this.institutionName = institutionName;
    }

    public Long getMarks() {
        return marks;
    }

    public void setMarks(Long marks) {
        this.marks = marks;
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
