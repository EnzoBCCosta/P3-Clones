import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1E1F22',
    paddingTop: 48,
  },
  sidebar: {
    width: 72,
    backgroundColor: '#111214',
    alignItems: 'center',
    paddingTop: 12,
  },
  serverButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serverButtonActive: {
    backgroundColor: '#5865F2',
    borderRadius: 16,
  },
  serverTextActive: {
    fontSize: 20,
  },
  separator: {
    width: 32,
    height: 2,
    backgroundColor: '#35363C',
    borderRadius: 1,
    marginBottom: 8,
  },
  serverIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  addServerButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#313338',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addServerText: {
    color: '#23A55A',
    fontSize: 24,
    fontWeight: '300',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#2B2D31',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerTitle: {
    color: '#F2F3F5',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchBarContainer: {
    backgroundColor: '#1E1F22',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchText: {
    color: '#949BA4',
    fontSize: 14,
  },
  friendsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#313338',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    borderWidth: 3,
    borderColor: '#2B2D31',
  },
  featuredCard: {
    backgroundColor: '#1E1F22',
    padding: 16,
    borderRadius: 16,
    width: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1F22',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  chatName: {
    color: '#F2F3F5',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  inviteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  inviteText: {
    color: '#949BA4',
    fontSize: 16,
    fontWeight: '600',
  },
  inviteIcons: {
    fontSize: 18,
  },
  userFooter: {
    height: 68,
    backgroundColor: '#232428',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#1F2023',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTextContainer: {
    marginLeft: 12,
  },
  userName: {
    color: '#F2F3F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatusText: {
    color: '#949BA4',
    fontSize: 12,
  },
  footerNotificationIcon: {
    fontSize: 20,
    color: '#949BA4',
  },
});
