import FoodInput from "../../card/FoodInput";
import Button from "../../compenent/Button";
import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

export default function MenuForm({ id, mVisible }) {
  const dispatch = useDispatch();

  const initialValues = {
    id: id,
    kahvalti: {
      yemek: "",
      bDegeri: 0,
    },
    firstAraOgun: {
      yemek: "",
      bDegeri: 0,
    },
    ogle: {
      yemek: "",
      bDegeri: 0,
    },
    secondAraOgun: {
      yemek: "",
      bDegeri: 0,
    },
    aksam: {
      yemek: "",
      bDegeri: 0,
    },
  };

  const handleMenu = (menu) => {
    dispatch({ type: "ADD_MENU", payload: { menu } });
    mVisible(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleMenu}>
      {({ handleChange, handleSubmit, values }) => (
        <>
          <FoodInput
            title="Kahvaltı"
            onFoodValue={values.kahvalti.yemek}
            onFoodChange={handleChange("kahvalti.yemek")}
            onNutritiveValue={values.kahvalti.bDegeri}
            onNutritiveChange={handleChange("kahvalti.bDegeri")}
          />
          <FoodInput
            title="Ara Öğün"
            onFoodValue={values.firstAraOgun.yemek}
            onFoodChange={handleChange("firstAraOgun.yemek")}
            onNutritiveValue={values.firstAraOgun.bDegeri}
            onNutritiveChange={handleChange("firstAraOgun.bDegeri")}
          />
          <FoodInput
            title="Öğle"
            onFoodValue={values.ogle.yemek}
            onFoodChange={handleChange("ogle.yemek")}
            onNutritiveValue={values.ogle.bDegeri}
            onNutritiveChange={handleChange("ogle.bDegeri")}
          />
          <FoodInput
            title="Ara Öğün"
            onFoodValue={values.secondAraOgun.yemek}
            onFoodChange={handleChange("secondAraOgun.yemek")}
            onNutritiveValue={values.secondAraOgun.bDegeri}
            onNutritiveChange={handleChange("secondAraOgun.bDegeri")}
          />
          <FoodInput
            title="Akşam"
            onFoodValue={values.aksam.yemek}
            onFoodChange={handleChange("aksam.yemek")}
            onNutritiveValue={values.aksam.bDegeri}
            onNutritiveChange={handleChange("aksam.bDegeri")}
          />

          <Button onPress={handleSubmit} title="Tamamla" />
        </>
      )}
    </Formik>
  );
}
