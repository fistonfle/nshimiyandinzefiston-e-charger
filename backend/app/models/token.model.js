const mongoose = require("mongoose");
const Joi = require("joi");
var schema = mongoose.Schema(
  {
    code: String,
    meterNumber: { type: String, ref: "meter" },
    amount: Number,
    endDate: Date,
    status: {
      type: String,
      enum: ["unused", "used"],
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("token", schema);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports.Token = Model;
module.exports.validateTokenPayload = (body) => {
  return Joi.object({
    amount: Joi.number().min(100).max(182500).required(),
    meterNumber: Joi.string().min(6).required(),
  }).validate(body);
};
