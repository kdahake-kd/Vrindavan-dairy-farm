

function Customer_logout() {
    localStorage.removeItem("customer_login");
    localStorage.removeItem("customer_username");
    window.location.href='/customer/login'




}

export default Customer_logout;

