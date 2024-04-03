import { KeyboardAvoidingView, Platform } from "react-native";
import { ITxtInput } from "../utils/interfaces";
import { TextInput, HelperText } from "react-native-paper";

type AvoidingViewProps = {
  children: React.ReactNode;
};

const _isValueValid = (name: string) => /^[a-zA-Z]*$/.test(name);

const TextInputAvoidingView = ({ children }: AvoidingViewProps) => {
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
}: ITxtInput) => {
  return (
    <TextInputAvoidingView>
      <TextInput
        // mode="flat"
        label={label}
        value={value}
        // maxLength={4}
        onChangeText={onChangeText}
        keyboardType={keyboardType || ("default" as any)}
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
