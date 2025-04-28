import { KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';

function TextInputAvoidingView({ children }) {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={80}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    { children }
  );
}

export function TxtInput({ value, onChangeText, label, marginRight, marginLeft, keyboardType }) {
  return (
    <TextInputAvoidingView>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType || 'default'}
        className={`mr- mb-4 flex-1 bg-transparent${marginRight} ml-${marginLeft}`}
        style={{ paddingHorizontal: 0 }}
      />
    </TextInputAvoidingView>
  );
}
