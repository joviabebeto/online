const successResponse=(res,status,msag,datas)=>{
    res.status(status).json({
        message:msag,
        data:datas
    })
}
export default successResponse