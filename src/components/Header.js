import React from 'react';

const Header = ({ display }) => {
  return (
    <header>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <h1>SafterTek FrontEnd</h1>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Date:
                  <input type="text" value="04/06/2024" readOnly />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Professor:
                  <input type="text" value="M Jogendra Kumar" readOnly />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  College:
                  <input type="text" value="K L University" readOnly />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Department:
                  <input type="text" value="Computer Science" readOnly />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Semester:
                  <input type="text" value="Even Sem 2024" readOnly />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Group:
                  <input type="text" value="FrontEnd" readOnly />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </header>
  );
};

export default Header;