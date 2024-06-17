import React from "react";
import { Formik } from "formik";
import styles from "./EditUserForm.module.css";
import TextInput from "../../ui/TextInput/TextInput";
import DropDownList from "../../ui/DropDownList/DropDownList";
import CheckBoxInput from "../../ui/CheckBoxInput/CheckBoxInput";
import RadioInput from "../../ui/RadioInput/RadioInput";
import TextArea from "../../ui/TextArea/TextArea";

const SPECIALITY = [
  { value: "Верстальщик", label: "Верстальщик" },
  { value: "Выбранный пункт", label: "Выбранный пункт" },
  { value: "Не выбран", label: "Не выбран" },
  { value: "Hover", label: "Hover" },
];

const DOCUMENT = [
  { value: "Паспорт", label: "Паспорт" },
  { value: "СНИЛС", label: "СНИЛС" },
  { value: "Загр. Паспорт", label: "Загр. Паспорт" },
];

const REQUIRED_FIELDS = [
  "fullName",
  "speciality",
  "document",
  "aboutMe",
  "workPhone",
  "workPhoneTrue",
  "mobilePhone",
  "faks",
  "homePhone",
  "workEmail",
  "personalEmail",
  "comment",
];

const INITIAL_VALUES = {
  workPhone: "",
  workPhoneTrue: "",
  mobilePhone: "",
  faks: "",
  homePhone: "",
  workEmail: "",
  personalEmail: "",
  fullName: "",
  speciality: SPECIALITY[0].value,
  document: DOCUMENT[0].value,
  city: "",
  aboutMe: "",
  disabledTrue: true,
  disabledFalse: false,
  loveCheckBox: false,
  hateCheckBox: false,
  radioGroup1: "",
  radioGroup2: "",
  comment: "",
};

const PHONEPATTERN = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;
const EMAILPATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const EditUserForm = () => {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.title}>Редактировать профиль</h1>
      <div className={styles.container}>
        <div className={styles.form}>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={(values) => {
              const errors = {};

              REQUIRED_FIELDS.forEach((field) => {
                if (!values[field]) {
                  errors[field] = "Обязательное поле";
                }
              });

              if (!PHONEPATTERN.test(values.workPhone))
                errors.workPhone = "Неверный формат номера";
              if (!PHONEPATTERN.test(values.workPhoneTrue))
                errors.workPhoneTrue = "Неверный формат номера";
              if (!PHONEPATTERN.test(values.mobilePhone))
                errors.mobilePhone = "Неверный формат номера";
              if (!PHONEPATTERN.test(values.faks))
                errors.faks = "Неверный формат номера";
              if (!PHONEPATTERN.test(values.homePhone))
                errors.homePhone = "Неверный формат номера";
              if (!EMAILPATTERN.test(values.workEmail))
                errors.workEmail = "Неверный формат email";
              if (!EMAILPATTERN.test(values.personalEmail))
                errors.personalEmail = "Неверный формат email";

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
            }) => (
              <form className={styles.a} onSubmit={handleSubmit}>
                <h3 className={styles.h3__title}>Общее</h3>
                <div className={styles.inputs}>
                  <TextInput
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="ФИО"
                    error={
                      touched.fullName && errors.fullName ? errors.fullName : ""
                    }
                  />
                  <DropDownList
                    label="Специализация"
                    options={SPECIALITY}
                    name="speciality"
                    value={values.speciality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.speciality && errors.speciality
                        ? errors.speciality
                        : ""
                    }
                  />
                  <DropDownList
                    label="Документ"
                    options={DOCUMENT}
                    name="document"
                    value={values.document}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.document && errors.document ? errors.document : ""
                    }
                  />
                  <TextInput
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Название города"
                    isDisabled={true}
                    label="Город"
                    error={touched.city && errors.city ? errors.city : ""}
                  />
                  <TextArea
                    name="aboutMe"
                    value={values.aboutMe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="О себе"
                    error={
                      touched.aboutMe && errors.aboutMe ? errors.aboutMe : ""
                    }
                  />
                </div>
                <span className={styles.delimetr__general} />
                <h3 className={styles.h3__title}>Контакты</h3>
                <div className={styles.inputs}>
                  <TextInput
                    type="tel"
                    name="workPhone"
                    value={values.workPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="Раб. тел."
                    error={
                      touched.workPhone && errors.workPhone
                        ? errors.workPhone
                        : ""
                    }
                  />
                  <TextInput
                    type="tel"
                    name="workPhoneTrue"
                    value={values.workPhoneTrue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Раб. прямой"
                    error={
                      touched.workPhoneTrue && errors.workPhoneTrue
                        ? errors.workPhoneTrue
                        : ""
                    }
                  />
                  <TextInput
                    type="tel"
                    name="mobilePhone"
                    value={values.mobilePhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Мобильный"
                    error={
                      touched.mobilePhone && errors.mobilePhone
                        ? errors.mobilePhone
                        : ""
                    }
                  />
                  <TextInput
                    type="tel"
                    name="faks"
                    value={values.faks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="Факс"
                    error={touched.faks && errors.faks ? errors.faks : ""}
                  />
                  <TextInput
                    type="tel"
                    name="homePhone"
                    value={values.homePhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Домашний"
                    error={
                      touched.homePhone && errors.homePhone
                        ? errors.homePhone
                        : ""
                    }
                  />
                  <TextInput
                    type="email"
                    name="workEmail"
                    value={values.workEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="Email раб."
                    error={
                      touched.workEmail && errors.workEmail
                        ? errors.workEmail
                        : ""
                    }
                  />
                  <TextInput
                    type="email"
                    name="personalEmail"
                    value={values.personalEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="Email личн."
                    error={
                      touched.personalEmail && errors.personalEmail
                        ? errors.personalEmail
                        : ""
                    }
                  />
                </div>
                <span className={styles.delimetr__contacts} />
                <h3 className={styles.h3__title}>Мое мнение о чекбоксах</h3>
                <div className={styles.inputs__box}>
                  <CheckBoxInput
                    name="disabledTrue"
                    isChecked={values.disabledTrue}
                    isDisabled={true}
                    label="Неактивен, выбран"
                    onChange={handleChange}
                  />
                  <CheckBoxInput
                    name="disabledFalse"
                    isChecked={values.disabledFalse}
                    isDisabled={true}
                    label="Неактивен, не выбран"
                    onChange={handleChange}
                  />
                  <CheckBoxInput
                    name="loveCheckBox"
                    isChecked={values.loveCheckBox}
                    label="Я люблю чекбоксы"
                    onChange={handleChange}
                  />
                  <CheckBoxInput
                    name="hateCheckBox"
                    isChecked={values.hateCheckBox}
                    label="Я ненавижу чекбоксы"
                    onChange={handleChange}
                  />
                </div>
                <span className={styles.delimetr__checkbox} />
                <h3 className={styles.h3__title}>Мое мнение о радио-кнопках</h3>
                <div className={styles.inputs__box}>
                  <RadioInput
                    onChange={handleChange}
                    name="radioGroup1"
                    value="radio1"
                    label="Неактивна, выбрана"
                    isChecked={true}
                    isDisabled={true}
                  />
                  <RadioInput
                    onChange={handleChange}
                    name="radioGroup1"
                    value="radio2"
                    label="Неактивна, не выбрана"
                    isChecked={values.radioGroup1 === "radio2"}
                    isDisabled={true}
                  />
                  <RadioInput
                    onChange={handleChange}
                    name="radioGroup2" // Change here
                    value="radio3"
                    label="Я люблю радио-кнопки"
                    isChecked={values.radioGroup2 === "radio3"} // Change here
                  />
                  <RadioInput
                    onChange={handleChange}
                    name="radioGroup2" // Change here
                    value="radio4"
                    label="Я ненавижу радио-кнопки"
                    isChecked={values.radioGroup2 === "radio4"} // Change here
                  />
                  <TextArea
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="..."
                    label="Комментарий"
                    error={
                      touched.comment && errors.comment ? errors.comment : ""
                    }
                  />
                </div>
                <span className={styles.delimetr_button} />
                <button className={styles.button__save} type="submit">
                  Сохранить
                </button>
                <button
                  className={styles.button__cancel}
                  onClick={() => resetForm()}
                  type="button"
                >
                  Отмена
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
