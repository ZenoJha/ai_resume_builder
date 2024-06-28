 ● ExternalLink › renders correctly with given href

    Unable to find an element with text: Click me

    <a>
      Click me
    </a>

      24 |   test('renders correctly with given href', () => {
      25 |     const { getByText } = render(<ExternalLink href="https://example.com">Click me</ExternalLink>);
    > 26 |     const linkElement = getByText('Click me');
         |                         ^
      27 |     expect(linkElement).toBeTruthy();
      28 |   });
      29 |

      at Object.getByText (components/__tests__/ExternalLink-test.jsx:26:25)

  ● ExternalLink › opens browser async on native platforms

    Unable to find an element with text: Click me

    <a>
      Click me
    </a>

      31 |     Platform.OS = 'ios'; // Simulate a native platform
      32 |     const { getByText } = render(<ExternalLink href="https://example.com">Click me</ExternalLink>);
    > 33 |     const linkElement = getByText('Click me');
         |                         ^
      34 |
      35 |     fireEvent.press(linkElement);
      36 |     expect(openBrowserAsync).toHaveBeenCalledWith('https://example.com');

      at Object.getByText (components/__tests__/ExternalLink-test.jsx:33:25)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:24)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:22:9)
      at node_modules/@babel/runtime/helpers/asyncToGenerator.js:27:7
      at Object.<anonymous> (node_modules/@babel/runtime/helpers/asyncToGenerator.js:19:12)

  ● ExternalLink › does not prevent default on web platform

    Unable to find an element with text: Click me

    <a>
      Click me
    </a>

      40 |     Platform.OS = 'web'; // Simulate the web platform
      41 |     const { getByText } = render(<ExternalLink href="https://example.com">Click me</ExternalLink>);
    > 42 |     const linkElement = getByText('Click me');
         |                         ^
      43 |
      44 |     fireEvent.press(linkElement);
      45 |     expect(openBrowserAsync).not.toHaveBeenCalled();

      at Object.getByText (components/__tests__/ExternalLink-test.jsx:42:25)

  ● ExternalLink › prevents default and opens browser async on non-web platforms

    Unable to find an element with text: Click me

    <a>
      Click me
    </a>

      50 |
      51 |     const { getByText } = render(<ExternalLink href="https://example.com">Click me</ExternalLink>);
    > 52 |     const linkElement = getByText('Click me');
         |                         ^
      53 |
      54 |     // Simulate the press event with preventDefault mock
      55 |     const event = { preventDefault: jest.fn() };
