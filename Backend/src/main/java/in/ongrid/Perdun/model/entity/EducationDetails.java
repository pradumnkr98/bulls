package in.ongrid.Perdun.model.entity;

import javax.persistence.*;

@Entity
public class EducationDetails extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String degreeName;

    @Column
    private String major;

    @Column
    private String institutionName;

    @Column
    private Long marks;

    @Column
    private String startDate;

    @Column
    private String endDate;

    @Column
    private String rollNo;

    @ManyToOne
    @JoinColumn(name="users_id", nullable=false)
    private Users users;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getRollNo() {
        return rollNo;
    }

    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public EducationDetails(String degreeName, String major, String institutionName, Long marks, String startDate, String endDate, Users users) {
        this.degreeName = degreeName;
        this.major = major;
        this.institutionName = institutionName;
        this.marks = marks;
        this.startDate = startDate;
        this.endDate = endDate;
        this.users = users;
    }

    public EducationDetails(){};
}
