import {
  TurboModuleRegistry,
  TurboModule,
} from 'react-native';

type CursorTypes =
  | 'hand'
  | 'cross'
  | 'arrow'
  | 'help'
  | 'wait'
  | 'person'
  | 'ibeam'
  | 'pin'
  | 'sizeAll'
  | 'sizeNortheastSouthwest'
  | 'sizeNorthSouth'
  | 'sizeNorthwestSoutheast'
  | 'sizeNorthwestSoutheast'
  | 'sizeWestEast'
  | 'universalNo'
  | 'upArrow';

export interface Spec extends TurboModule {
  cursor: (params: CursorTypes) => Promise<void>;
}

export const cursorPointer = TurboModuleRegistry.get<Spec>('mousePointer') as Spec;

 