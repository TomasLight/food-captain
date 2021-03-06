import { Components } from '@material-ui/core/styles/components';
import { ThemeColors } from '../models';

export function overrideCheckbox(colors: ThemeColors): Components {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        colorPrimary: {
          '&$checked': {
            color: colors.primary.main,
          },
        },
        colorSecondary: {
          '&$checked': {
            color: colors.secondary.main,
          },
        },
      },
    },
  };
}
