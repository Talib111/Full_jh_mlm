var exp = require('express');
var cors = require('cors');
const app = exp()
var port = process.env.PORT || 3000;
const push_all_data = require('./src/all_routes/user_push_all_data');
const get_all_data = require('./src/all_routes/user_get_all_data');
const update_all_data = require('./src/all_routes/user_update_all_data');
const order_products = require('./src/all_routes/user_order_products');
// const image_upload = require('./src/all_routes/user/file_upload');


app.use(cors())
// app.use(body_p.json());
app.use(exp.json());



require('./src/utils/adminRole');
require('./src/utils/userRole');

const adminRoute = require('./src/routes/admin');

app.use('/admin', adminRoute);




app.use("/push-all-data",push_all_data);
app.use("/get-all-data",get_all_data);
app.use("/update-all-data",update_all_data);
app.use("/order-products",order_products);
// app.use("/file-upload",image_upload);







app.listen(port,()=>{
    console.log(`nodes js is listening at ${port}`);
})
