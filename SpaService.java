public class SpaService {
    private String serviceDescription;
    private double price;

    // Parameterless Constructor (Using 'this' to call the 2-parameter constructor)
    public SpaService() {
        this("XXX", 0);
    }

    // Overloaded Two-Parameter Constructor
    public SpaService(String desc, double pr) {
        serviceDescription = desc;
        price = pr;
    }

    // Setters (Mutators)
    public void setServiceDescription(String service) {
        serviceDescription = service;
    }

    public void setPrice(double pr) {
        price = pr;
    }

    // Getters (Accessors)
    public String getServiceDescription() {
        return serviceDescription;
    }

    public double getPrice() {
        return price;
    }
}
