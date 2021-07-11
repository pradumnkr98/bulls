package in.ongrid.Perdun.model.entity;

import javax.persistence.*;

@Entity
public class ExperienceDetails extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Users users;

    @Column
    private String organisationName;

    @Column
    private String startDate;

    @Column
    private String endDate;

    @Column
    private String employeeId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
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

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    @Override
    public String toString() {
        return "ExperienceDetails{" +
                "id=" + id +
                ", users=" + users +
                ", organisationName='" + organisationName + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", employeeId='" + employeeId + '\'' +
                '}';
    }

    public ExperienceDetails(){};
    public ExperienceDetails(Users users, String organisationName, String startDate, String endDate) {
        this.users = users;
        this.organisationName = organisationName;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
