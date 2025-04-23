import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dropdown = ({
  options,
  placeholder,
  placeholderColor = '#999',
  iconName = 'arrow-drop-down',
  iconColor = '#333',
  showRequired = false, // Controls whether the red * is shown
  onSelectOption,
}: {
  options: Array<string>;
  placeholder: string;
  placeholderColor?: string;
  iconName?: string;
  iconColor?: string;
  showRequired?: boolean;
  onSelectOption: (option: string) => void;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
    onSelectOption(option); // Callback function
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        {/* Conditional Placeholder */}
        {selectedOption === '' && (
          <Text style={[styles.placeholder, {color: placeholderColor}]}>
            {placeholder}
            {showRequired && <Text style={{color: 'red'}}> *</Text>}
          </Text>
        )}
        <TextInput
          style={styles.input}
          value={selectedOption}
          editable={false} // Prevent manual text input
        />

        <TouchableOpacity onPress={toggleDropdown}>
          <Icon
            name={iconName}
            size={24}
            color={iconColor}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelectOption(item)}>
                <Text style={styles.option}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    position: 'relative',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginLeft: 10,
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    maxHeight: 200, // Limit dropdown height
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Dropdown;
