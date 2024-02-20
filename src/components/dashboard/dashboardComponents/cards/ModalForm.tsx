import { Formik, Form } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { ICard } from "../../../interfaces/card";
import { InvestmentTypes } from "../../../../types/investmentTypes";
import { CardStatusTypes } from "../../../../types/cardStatusTypes";
import { InvestmentNamesTypes } from "../../../../types/InvestmentNamesTypes";
import { InvestmentListingsTypes } from "../../../../types/investmentListingsTypes";
import { handleInvestmentTypeChange } from "../../../../utils/investmentUtils";

interface IModalForms {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ICard) => void;
}

const ModalForm = ({ isOpen, onClose, onSubmit }: IModalForms) => {
  const validate = (values: any) => {
    const errors: any = {};
    if (values.value < 1) {
      errors.value = "Value must be greater than or equal to 1";
    }
    return errors;
  };
  return (
    <Dialog open={isOpen}>
      <DialogTitle className="bg-gray-300">Add New Investment</DialogTitle>
      <Formik
        initialValues={{
          id: 0,
          status: CardStatusTypes.ACTIVE,
          investmentType: InvestmentTypes.COMMODITIES,
          investmentName: InvestmentNamesTypes.APPLE,
          investmentListing: InvestmentListingsTypes.AAPL,
          value: 1,
          date: new Date().toISOString().split("T")[0],
        }}
        validate={validate}
        onSubmit={(values: any) => {
          if (values.value >= 1) {
            onSubmit(values);
            onClose();
          }
        }}
      >
        {({ handleChange, values, setFieldValue, isValid }: any) => (
          <Form className="bg-gray-300">
            <DialogContent>
              <FormControl
                fullWidth
                style={{ marginBottom: "15px", color: "red" }}
              >
                <InputLabel
                  id="investmentType-label"
                  style={{ backgroundColor: "#D1D5DB" }}
                >
                  Type
                </InputLabel>
                <Select
                  labelId="investmentType-label"
                  name="investmentType"
                  value={values.investmentType}
                  onChange={handleChange}
                  disabled
                >
                  {Object.values(InvestmentTypes).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginBottom: "15px" }}>
                <InputLabel
                  id="investmentName-label"
                  style={{ backgroundColor: "#D1D5DB" }}
                >
                  Name
                </InputLabel>
                <Select
                  labelId="investmentName-label"
                  name="investmentName"
                  value={values.investmentName}
                  onChange={(e) => {
                    handleChange(e);
                    handleInvestmentTypeChange(e.target.value, setFieldValue);
                  }}
                >
                  {Object.values(InvestmentNamesTypes).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  label="Value"
                  name="value"
                  type="number"
                  value={values.value}
                  onChange={handleChange}
                  error={!!values.value && values.value < 1}
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || values.value < 1}
              >
                Add
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ModalForm;
