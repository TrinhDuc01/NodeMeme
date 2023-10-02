import bcrypt from "bcryptjs"


// ma hoa password
export const hashPass = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash //hash code
}

//so sanh password
export const compareHashPass = (password,hash) => {
    return bcrypt.compareSync(password, hash); // true or false
}