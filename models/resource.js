

module.exports = function (sequelize, DataTypes) {


 var Resource = sequelize.define("Resource", {
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    address: {
        type: DataTypes.STRING
    },
    website: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    housing: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    domestic_violence: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    food: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    clothing: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    babysitting: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    doctor_visit: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    medicine: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    infant_items: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    daycare: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    auto_repair: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    bus_pass: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    other_transport: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    furniture: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    household_goods: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    employment: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    legal_aide: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    school_supplies: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    education_assistance: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    counseling: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    drug_addiction: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    internet_phone_tech: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    immigration_assist: {
        type: DataTypes.STRING, allowNull: true, defaultValue: false
    },
    item_name: {
        type: DataTypes.STRING
    },
    item_description: {
        type: DataTypes.STRING
    }

},
{
    timestamps: false

});
return Resource;


};