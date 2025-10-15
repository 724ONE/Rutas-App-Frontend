import React from 'react';
import { Text } from 'react-native';
import { Responsive, Theme } from '../../libs';

const ErrorMessage = ({ errorMessage, style }) => {
    if (!errorMessage) return null; // Don't render if there's no error

    return (
        <Text style={[{
            marginTop: -10,
            color: Theme.colors.error,
            fontFamily: Theme.typography.body.fontFamily,
            fontSize: Responsive.AppFonts.t1,
        }, style]}>
            {errorMessage}
        </Text>
    );
};

export default ErrorMessage;
