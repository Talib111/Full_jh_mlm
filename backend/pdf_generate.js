var express = require('express'),
        app = express(),
        pdf = require('express-pdf');
        path = require('path')
        var fs = require('fs');
 
//previously app.use(pdf())
app.use(pdf); // or you can app.use(require('express-pdf'));

 
//generating html template file with dynamic data
app.get('/make',function(req,res){
fs.writeFile('template.html',`<html><body>generated  via port</body></html>`,function(err){
    if(err) throw err;
    console.log("file save");
    res.redirect("/pdfFromHTML");
});

});
//generating pdf from html file
app.use('/pdfFromHTML', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        html: path.resolve(__dirname, './template.html'),
        // options: {...}
    });
    // res.writeHead(200, {
    //     'Content-Type': 'application/pdf',
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Disposition': 'attachment; filename=generated.pdf'
    // });
});
 

//generating pdf from html string
app.use('/pdfFromHTMLString', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        htmlContent: '<html><body>ASDF</body></html>',
        // options: {...}
    });
});
 
//showing dummy.pdf
app.use('/pdf', function(req, res){
    res.pdf(path.resolve(__dirname, './dummy.pdf'));
})

app.listen(3000, () => {
	console.log("Listening on port 3000");
});