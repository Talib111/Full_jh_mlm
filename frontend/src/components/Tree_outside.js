import React,{useState,useEffect} from 'react';
import Tree from 'react-d3-tree';
import { connect } from "react-redux";


// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
// const orgChart = {
//   name: 'CEO',
//   children: [
//     {
//       name: 'Manager',
//       attributes: {
//         department: 'Production',
//       },
//       children: [
//         {
//           name: 'Foreman',
//           attributes: {
//             department: 'Fabrication',
//           },
//           children: [
//             {
//               name: 'Worker',
//             },
//           ],
//         },
//         {
//           name: 'Foreman',
//           attributes: {
//             department: 'Assembly',
//           },
//           children: [
//             {
//               name: 'Worker',
//             },
//             {
//                 name: 'developer',
//                 children: [
//                   {
//                     name: 'junior',
//                   },
//                 ],
//               },
//           ],
//         },
//       ],
//     },
//   ],
// };

function Tree_outside(props) {
  const [all_fetched_data, setall_fetched_data] = useState();
  const [loading, setloading] = useState(true);


  // const tree_setup=()=>{
   
  // }
  
  useEffect(() => {
    //    console.log("useEffect is executed");
       get_User_Data();
    // console.log(props.logged_User);
        
    }, []);

     
  // useEffect(() => {
  //   //    console.log("useEffect is executed");
  //     //  get_User_Data();
  //   // console.log(props.logged_User);
  //             console.log(all_fetched_data);
  //             setloading(false);


        
  //   }, [all_fetched_data]);
    
  //   // var all_data_fetched;

    const get_User_Data = ()=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status==200){
           //we have to convert string into json
          //  console.log(this.responseText);
            setall_fetched_data(JSON.parse(this.responseText));
          
 // console.log("all_fethced",all_fetched_data);
            // tree_setup();
            setloading(false)
          }
        }
        xhttp.open("POST","http://localhost:3000/get-all-data",true);
        xhttp.setRequestHeader('Content-Type',"application/json");  
        xhttp.send(JSON.stringify({_id: props.logged_User}));
    }

    if(loading){
      return <p>data is loading.....</p>;
    }

 else{
  const orgChart = {
    name: all_fetched_data._id,
    children: [
      {
        name: all_fetched_data._id,
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: all_fetched_data.Team.left_Team[0],
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: all_fetched_data.Team.left_Team[1],
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
              {
                  name: 'developer',
                  children: [
                    {
                      name: 'junior',
                    },
                  ],
                },
            ],
          },
        ],
      },
    ],
  };
  // return (
  //   // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
  //   <div id="treeWrapper" style={{ width: '1200px', height: '1500px',backgroundColor: 'white'}}>
  //     {/* <Tree data={orgChart} orientation={"vertical"} pathFunc="step"   /> */}
  //     {/* <Tree data={all_fetched_data} orientation={"vertical"} pathFunc="step"   /> */}
  //     <h6>{all_fetched_data.personal_Data.username}</h6>
  //   </div>
  // );
  return(
    <>
     <h6>{all_fetched_data._id}</h6>
       {/* <Tree />` will fill width/height of its container; in this case `#treeWrapper`. */}
    <div id="treeWrapper" style={{ width: '1200px', height: '1500px',backgroundColor: 'white'}}>
      <Tree data={orgChart} orientation={"vertical"} pathFunc="step"   /> 
  </div>
     
      </>

  )
 }
 
}

 //for redux
  //getting the num of cakes here
  const mapStateToProps = (state) => {
    return {
      numofCakes: state.numofCakes,
      current_User_Id: state.current_User_Id,
      logged_User: state.logged_User
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      buyCake: (form_dt) => dispatch({ type: "SELL_CAKE",form_dt2: form_dt }),
    };
  };
  ///for reudux

// export default Dashboard
export default connect(mapStateToProps,mapDispatchToProps)(Tree_outside)