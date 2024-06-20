export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        const { issues } = error;
        const errors = issues.map(err => err.message);
        return res.status(400).json({ status: 'error', message: errors});
    }
}