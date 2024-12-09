// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic, {
		rules:
			{
				"sort-imports": ["error", {
					"ignoreCase": false,
					"ignoreDeclarationSort": false,
					"ignoreMemberSort": false,
					"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
					"allowSeparatedGroups": false
				}]
			}

	}
);