import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const customRadioStyles = Styles.style({
  gap: 16,
  flexWrap: 'wrap',
  $nest: {
    'i-radio': {
      flexBasis: '20%'
    },
    'input[type="radio"]': {
      display: 'none'
    }
  }
});

export const customListItemStyled = Styles.style({
  display: 'block',
  paddingLeft: 12,
  $nest: {
    '> i-label': {
      display: "list-item",
      listStyle: 'disc'
    }
  }
});
