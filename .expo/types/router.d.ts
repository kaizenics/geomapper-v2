/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/email-login` | `/(auth)/email-signup` | `/(auth)/log-in` | `/(auth)/reset-password` | `/(logs)` | `/(logs)/archived-tracks` | `/(logs)/catch-details` | `/(logs)/edit-catches` | `/(logs)/edit-location` | `/(logs)/fish-analysis` | `/(logs)/navigate-location` | `/(logs)/recent-track` | `/(logs)/summary` | `/(settings)` | `/(settings)/about` | `/(settings)/change-password` | `/(settings)/edit-profile` | `/(settings)/faq` | `/(settings)/feedback` | `/(settings)/help` | `/(settings)/map-themes` | `/(settings)/notifications` | `/(settings)/user-settings` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/sst-map` | `/(tabs)/tracker` | `/_sitemap` | `/about` | `/archived-tracks` | `/catch-details` | `/change-password` | `/edit-catches` | `/edit-location` | `/edit-profile` | `/email-login` | `/email-signup` | `/faq` | `/feedback` | `/fish-analysis` | `/help` | `/home` | `/loading-screen` | `/log-in` | `/map-themes` | `/navigate-location` | `/notifications` | `/profile` | `/recent-track` | `/reset-password` | `/splash-screen` | `/sst-map` | `/summary` | `/tracker` | `/user-settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
