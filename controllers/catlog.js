exports.getCat = (req,res,next) => {
    res.json({
        cat: [{title: "hello world", author: "prime mover"}]
    });
};