import bcrypt from "bcryptjs";


const admin = {
    username: 'Albetrosofficial@gmail.com',
    password: bcrypt.hashSync("admin123", 10),
};

export default admin;
