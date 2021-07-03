const mongoose = require("mongoose");
const validator = require("validator");

const All_dataSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  selling_Point: {
    type: String
  },
  next_Royality_Date: {
    type: String
  },
  total_Paid: {
    type: String
  },
  // activation package type
  activation_Package: {
    type: String
  },
  sponser_Side: {
      type: String
      
    },
  // 1 personal info
  personal_info: {
    type: Object,
    sponser_Username: {
      type: String
      
    },
      date_Of_Joining: {
        type: String
        
      },
    position: {
      type: String
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
    First_name: {
      type: String
    },
    Last_name: {
      type: String
    },
    Gender: {
      type: String
    },
    Father_name_Husband_name: {
      type: String
    },
    Phone: {
      type: String
    },
    Email: {
      type: String
    },
    Date_of_birth: {
      type: String
    },
    Profile_image: {
      type: String
    },
  },
  //2 address data
  address_Data: {
    country: {
      type: String
    },
    state: {
      type: String
    },
    city: {
      type: String
    },
    address: {
      type: String
    },
    landmark: {
      type: String
    },
    postal_Code: {
      type: String
    },
  },
  //3 id proof
  id_Proof_Data: {
    id_Proof: {
      type: String
    },
    pan_Card: {
      type: String
    },
    bank_Statement: {
      type: String
    },
    dr_Licence: {
      type: String
    },
  },
  //4 bank details
  bank_Details: {
    account_Holder: {
      type: String
    },
    account_no: {
      type: String
    },
    ifsc_Code: {
      type: String
    },
  },
  //5 Team
  Team: {
    my_Team: {
      type: Array
    },
    left_Team: {
      type: Array
    },
    right_Team: {
      type: Array
    },
    direct_Team: {
      type: Array
    }
  },
  //6 payouts
  payouts: {
    direct_Income: {
      type: String
    },
    repurchase_Income: {
      type: String
    },
    matching_Income: {
      type: String
    },
    matching_Bonus: {
      type: String
    },
    leadership_Reward: {
      type: String
    },
    leadership_Income: {
      type: String
    },
    car_Fund: {
      type: String
    },
    house_Fund: {
      type: String
    },
    anual_Bonus: {
      type: String
    }
  },
  //7 reports
  reports: {
    admin_Charge: {
      type: String
    },
    tds_Charge: {
      type: String
    },
  },//7 reports
  carry_Forward: {
    left_Carry_Forward: {
      type: String
    },
    right_Carry_Forward: {
      type: String
    },
  },
  order_Data: {
    date: {
      type: String,
    },
    order_ref_no: {
      type: String,
    },
    product_Name:{
      type: String
    },
    product_Qty: {
      type: String,
    },
    grand_Total: {
      type: String,
    },
    payment_Status: {
      type: String,
    }
  }
  // //8 wallet
  // wallet: {
  //   instant_Wallet: {
  //     type: String
  //   },
  //   tour_Wallet: {
  //     type: String
  //   },
  //   gold_Wallet: {
  //     type: String
  //   },
  //   payout_Wallet: {
  //     type: String
  //   },
  // }
  
});

const All_data = new mongoose.model("All_data", All_dataSchema);
module.exports = All_data;
