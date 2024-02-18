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
import { ICard } from "../../interfaces/card";
import { InvestmentTypes } from "../../../types/investmentTypes";
import { CardStatusTypes } from "../../../types/cardStatusTypes";
import { InvestmentNamesTypes } from "../../../types/InvestmentNamesTypes";
import { InvestmentListingsTypes } from "../../../types/investmentListingsTypes";

interface IModalForms {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ICard) => void;
}

const ModalForm = ({ isOpen, onClose, onSubmit }: IModalForms) => {
  const handleInvestmentTypeChange = (
    selectedInvestmentName: string,
    setFieldValue: Function
  ) => {
    let newInvestmentType;
    let newInvestmentListing;

    switch (selectedInvestmentName) {
      case InvestmentNamesTypes.APPLE:
      case InvestmentNamesTypes.NETFLIX:
      case InvestmentNamesTypes.DISNEY:
      case InvestmentNamesTypes.TESLA:
        newInvestmentType = InvestmentTypes.STOCKS;
        break;
      case InvestmentNamesTypes.BITCOIN:
        newInvestmentType = InvestmentTypes.CRYPTO;
        break;
      case InvestmentNamesTypes.GOLD:
        newInvestmentType = InvestmentTypes.COMMODITIES;
        break;
    }

    switch (selectedInvestmentName) {
      case InvestmentNamesTypes.NETFLIX:
        newInvestmentListing = InvestmentListingsTypes.NTFLX;
        break;
      case InvestmentNamesTypes.APPLE:
        newInvestmentListing = InvestmentListingsTypes.AAPL;
        break;
      case InvestmentNamesTypes.BITCOIN:
        newInvestmentListing = InvestmentListingsTypes.BTC;
        break;
      case InvestmentNamesTypes.DISNEY:
        newInvestmentListing = InvestmentListingsTypes.DIS;
        break;
      case InvestmentNamesTypes.GOLD:
        newInvestmentListing = InvestmentListingsTypes.AU;
        break;
      case InvestmentNamesTypes.TESLA:
        newInvestmentListing = InvestmentListingsTypes.TSLA;
        break;
    }

    setFieldValue("investmentType", newInvestmentType);
    setFieldValue("investmentListing", newInvestmentListing);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add New Card</DialogTitle>
      <Formik
        initialValues={{
          id: 0,
          status: CardStatusTypes.ACTIVE,
          investmentType: InvestmentTypes.COMMODITIES,
          investmentName: InvestmentNamesTypes.APPLE,
          investmentListing: InvestmentListingsTypes.AAPL,
          value: 0,
          date: new Date().toISOString().split("T")[0],
        }}
        onSubmit={(values: any) => {
          console.log(values, values);
          onSubmit(values);
          onClose();
        }}
      >
        {({ handleChange, values, setFieldValue }: any) => (
          <Form>
            <DialogContent>
              <FormControl fullWidth>
                <InputLabel id="investmentType-label">
                  Investment Type
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

              <FormControl fullWidth>
                <InputLabel id="investmentName-label">
                  Investment Name
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
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="contained">
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
