import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedata = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decodedata?.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json("bad request / token expired");
    }
};

export default auth;