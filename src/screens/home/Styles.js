import { StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../libs';

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  header: {
    backgroundColor: Theme.colors.primary,
    borderBottomLeftRadius: Theme.borders.largeRadius,
    borderBottomRightRadius: Theme.borders.largeRadius,
    paddingHorizontal: Responsive.getWidth('5%'),
    paddingVertical: Responsive.getHeight('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: Responsive.getWidth('10%'),
    height: Responsive.getWidth('10%'),
    borderRadius: Responsive.getWidth('5%'),
    marginRight: Responsive.getWidth('2%'),
  },
  welcomeText: {
    fontFamily: Theme.typography.body.fontFamily,
    color: Theme.colors.white,
  },
  userName: {
    fontFamily: Theme.typography.subheading.fontFamily,
    color: Theme.colors.white,
    fontSize: Responsive.AppFonts.t1,
  },
  notificationIcon: {
    backgroundColor: Theme.colors.white,
    padding: Responsive.getWidth('2%'),
    borderRadius: Theme.borders.regularRadius,
  },
  sectionContainer: {
    paddingHorizontal: Responsive.getWidth('5%'),
    marginTop: Responsive.getHeight('3%'),
  },
  sectionTitle: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.h5,
    color: Theme.colors.text,
    marginBottom: Responsive.getHeight('1%'),
  },
  mapImage: {
    width: '100%',
    height: Responsive.getHeight('20%'),
    borderRadius: Theme.borders.regularRadius,
  },
  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Responsive.getHeight('1%'),
  },
  card: {
    width: '48%',
    borderRadius: Theme.borders.regularRadius,
    padding: Responsive.getWidth('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNumber: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.h4,
    marginTop: Responsive.getHeight('1%'),
  },
  cardLabel: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    marginTop: Responsive.getHeight('0.5%'),
  },
  savedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    fontFamily: Theme.typography.medium.fontFamily,
    color: Theme.colors.primary,
  },
  locationCard: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.borders.regularRadius,
    borderWidth: Theme.borders.width,
    borderColor: '#E0E0E0',
    padding: Responsive.getWidth('3%'),
    marginTop: Responsive.getHeight('1%'),
  },
  iconContainer: {
    width: Responsive.getWidth('9%'),
    height: Responsive.getWidth('9%'),
    borderRadius: Responsive.getWidth('4.5%'),
    backgroundColor: '#FFF4E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Responsive.getWidth('2%'),
  },
  locationName: {
    fontFamily: Theme.typography.subheading.fontFamily,
    fontSize: Responsive.AppFonts.t1,
    color: Theme.colors.text,
  },
  locationDetails: {
    fontFamily: Theme.typography.body.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: '#555',
  },
  locationNote: {
    fontFamily: Theme.typography.medium.fontFamily,
    fontSize: Responsive.AppFonts.t2,
    color: Theme.colors.primary,
  },
  addButton: {
    width: Responsive.getWidth('10%'),
    height: Responsive.getWidth('10%'),
    backgroundColor: Theme.colors.primary,
    borderRadius: Responsive.getWidth('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
