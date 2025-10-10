import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import IconButton from '../../components/buttons/IconButton';
import { AppIcons } from '../../constants/icons';

const Notifications = ({ navigation }) => {
    const newNotifications = [
        { id: '1', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
        { id: '2', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
        { id: '3', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    ];

    const earlierNotifications = [
        { id: '4', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
        { id: '5', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
        { id: '6', title: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.' },
    ];

    const renderNotification = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <IconButton
                    icon={AppIcons.backArrow}
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    size={22}
                />
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* New Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>New</Text>
                    <TouchableOpacity>
                        <Text style={styles.markAll}>Mark all as read</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={newNotifications}
                    renderItem={renderNotification}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />

                {/* Earlier Section */}
                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Earlier</Text>
                <FlatList
                    data={earlierNotifications}
                    renderItem={renderNotification}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />
            </View>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.whiteClr,
    },
    header: {
        backgroundColor: AppColors.primaryClr,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    backButton: {
        backgroundColor: AppColors.whiteClr,
        borderRadius: 100,
        padding: 8,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 16,
        color: AppColors.whiteClr,
        marginRight: 30,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 14,
        color: AppColors.blackClr,
    },
    markAll: {
        fontFamily: Fonts.poppinsRegular,
        fontSize: 12,
        color: AppColors.blackClr,
    },
    card: {
        borderWidth: 1,
        borderColor: AppColors.borderClr,
        borderRadius: 10,
        padding: 12,
        marginTop: 12,
        backgroundColor: AppColors.whiteClr,
    },
    title: {
        fontFamily: Fonts.poppinsSemiBold,
        fontSize: 13,
        color: AppColors.blackClr,
    },
    desc: {
        fontFamily: Fonts.poppinsRegular,
        fontSize: 12,
        color: AppColors.grayText,
        marginTop: 5,
        lineHeight: 18,
    },
});
