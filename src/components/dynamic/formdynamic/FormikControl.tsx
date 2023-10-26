

// import RadioButtons from "./Radio";
// import SelectBox from "./Select";
// import Textarea from "./TextArea";
// import CheckBox from "./CheckBoxes";

import Input from "./Input";

const FormikControl = (props: any) => {
  const {control, ...rest} = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    // case "textarea":
    //   return <Textarea {...rest} />;
    // case "checkbox":
    //   return <CheckBox {...rest} />;
    // case "select":
    //   return <SelectBox {...rest} />;
    // case "radio":
    //   return <RadioButtons {...rest} />;
  }
};

export default FormikControl;
