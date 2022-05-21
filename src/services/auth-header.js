export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.jwtToken) {
        // For Spring Boot back-end
        return { Authorization: "Bearer " + user.jwtToken };

    } else {
        return {};
    }
}
