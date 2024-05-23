import { KeyboardAvoidingView, Platform } from "react-native";
import { TextInput } from "react-native-paper";

const _isValueValid = (name) => /^[a-zA-Z]*$/.test(name);

const TextInputAvoidingView = ({ children }) => {
  return Platform.OS === "ios" ? (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );
};

export const TxtInput = ({
  value,
  onChangeText,
  label,
  marginRight,
  marginLeft,
  keyboardType,
}) => {
  return (
    <TextInputAvoidingView>
      <TextInput
        // mode="flat"
        label={label}
        value={value}
        // maxLength={4}
        onChangeText={onChangeText}
        keyboardType={keyboardType || ("default")}
        className={`bg-transparent flex-1 mb-4 mr-${marginRight} ml-${marginLeft}`}
        style={{ paddingHorizontal: 0 }}
        // error={!_isValueValid(value)}
      />
      {/* <HelperText type="error" padding="none" visible={!_isValueValid(value)}>
        Only letters are allowed
      </HelperText> */}
    </TextInputAvoidingView>
  );
};
