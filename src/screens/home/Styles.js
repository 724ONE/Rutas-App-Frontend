import { StyleSheet } from 'react-native';
import AppColors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteClr,
  },
  header: {
    backgroundColor: AppColors.primaryClr,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontFamily: Fonts.poppinsRegular,
    color: AppColors.whiteClr,
  },
  userName: {
    fontFamily: Fonts.poppinsSemiBold,
    color: AppColors.whiteClr,
    fontSize: 16,
  },
  notificationIcon: {
    backgroundColor: AppColors.whiteClr,
    padding: 8,
    borderRadius: 10,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 18,
    color: AppColors.blackClr,
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: '48%',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNumber: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 18,
    marginTop: 8,
  },
  cardLabel: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: 14,
    marginTop: 2,
  },
  savedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    fontFamily: Fonts.poppinsMedium,
    color: AppColors.primaryClr,
  },
  locationCard: {
    backgroundColor: AppColors.whiteClr,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 15,
    marginTop: 10,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#FFF4E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  locationName: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 15,
    color: AppColors.blackClr,
  },
  locationDetails: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 13,
    color: '#555',
  },
  locationNote: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: 13,
    color: AppColors.primaryClr,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: AppColors.primaryClr,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
