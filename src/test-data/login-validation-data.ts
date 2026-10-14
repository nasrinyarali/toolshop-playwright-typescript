type loginValidatiomnCate = {
    name: string;
    email: string;
    password: string;
    emailError: string | null;
    passwordError: string | null;
};

export const loginValidationData: loginValidatiomnCate[] = [
    {
        name: "empty username and password",
        email: "",
        password: "",
        emailError: "Email is required",
        passwordError: "Password is required"
    },
    {
        name: "Email is empty",
        email: "",
        password: "password123",
        emailError: "Email is required",
        passwordError: null
    },
    {
        name: "Password is empty",
        email: "user@example.com",
        password: "",
        emailError: null,
        passwordError: "Password is required"
    },
    {
        name: "Invalid email format",
        email: "nasrin",
        password: "password123",    
        emailError: "Email format is invalid",
        passwordError: null
    }
];