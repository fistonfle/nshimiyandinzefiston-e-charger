import React, { useState } from "react";
import { Input, Select, Button } from "antd";
const { Option } = Select;

export const PurchaseBillsForm = () => {
  const [price, setprice] = useState(0);
  const [meternumber, setmeternumber] = useState();
  const [currency, setCurrency] = useState("rwf");
  const [showtoken, setshowtoken] = useState(false);

  const onmeterchange = (e) => setmeternumber(e.target.value);

  const onCurrencyChange = (e) => setCurrency(e.target.value);

  const onpriceChange = (e) => setprice(e.target.value);

  const handlepurchasesubmit = (e) => {
    setshowtoken(true);
  };

  return (
    <form className="ml-32 p-[7vh] bg-white w-[40vw]">
      <h1 className="text-center mt-3 mb-16">
        Fill form below to buy your new subscription
      </h1>

      <span>
        <p>Enter the price: </p>
        <Input
          type="number"
          value={price || price}
          onChange={onpriceChange}
          style={{
            width: "70%",
          }}
        />
        <Select
          className=" ml-2"
          value={currency || currency}
          style={{
            width: "26%",
            margin: "0 8px",
          }}
          onChange={onCurrencyChange}
        >
          <Option value="rwf">RWF</Option>
          <Option value="dollar">Dollar</Option>
        </Select>

        <p className="mt-8">Enter account meter number: </p>

        <Input
          type="number"
          value={meternumber || meternumber}
          onChange={onmeterchange}
          style={{
            width: "100%",
          }}
        />

        <Button
          type="primary"
          className="w-full mt-8 h-16"
          size="middle"
          onClick={handlepurchasesubmit}
        >
          PURCHASE
        </Button>

        {showtoken ? (
          <>
            <p className="mt-16 font-bold">Token bought: </p>
            <p className="text-center p-3 bg-[#f0ce0b32]">02145978</p>
          </>
        ) : (
          ""
        )}
      </span>
    </form>
  );
};
