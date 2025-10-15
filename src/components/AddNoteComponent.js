import { StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'
import { Theme, Responsive } from '../libs'

const AddNoteComponent = ({ placeholder, requiredField, hint, onChange, weightNote, weightNoteFocused, fieldustomStyles, lableCustomStyles }) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.label, lableCustomStyles]}>
                {hint}{requiredField && <Text style={styles.required}>*</Text>}
            </Text>

            <View style={[styles.noteContainer, fieldustomStyles]}>
                <TextInput
                    onChangeText={onChange}
                    value={weightNote?.toString()}
                    keyboardType='ascii-capable'
                    placeholder={placeholder}
                    placeholderTextColor={Theme.colors.hintText}
                    cursorColor={Theme.colors.primary}
                    multiline={true}
                    ref={weightNoteFocused}
                    blurOnSubmit={false}
                    style={{
                        color: Theme.colors.text,
                        fontFamily: Theme.typography.body.fontFamily,
                        fontSize: Responsive.AppFonts.t1,
                    }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: Theme.borders.width,
        borderColor: Theme.colors.borderClr,
        borderRadius: Theme.borders.mediumRadius,
        paddingHorizontal: Responsive.getWidth('3.5%'),
        height: Responsive.getHeight('13%'),
        paddingTop: Responsive.getHeight('0%'),
        // marginBottom: Responsive.getHeight('2%'),
        backgroundColor: Theme.colors.white,
    },
    container: {
        marginVertical: Responsive.getHeight('0%'),
        marginTop: Responsive.getHeight('0%'),
    },
    label: {
        fontSize: Responsive.AppFonts.t1,
        marginBottom: Responsive.getHeight('0.8%'),
        fontFamily: Theme.typography.medium.fontFamily,
        color: Theme.colors.text,
    },
    required: {
        color: Theme.colors.error,
        fontFamily: Theme.typography.medium.fontFamily,
    },
})

export default AddNoteComponent