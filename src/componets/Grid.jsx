import React from "react";

export const Grid = () => {
  return (
    <div id="grid-main-div" className="p-52">
      <div className="grid grid-cols-5 gap-3">
        {/* Row 1 */}
        <div className="bg-blue-500 text-white p-20">Item 1</div>
        <div className="bg-green-500 text-white p-20">Item 2</div>
        <div className="bg-red-500 text-white p-20">Item 3</div>
        <div className="bg-yellow-500 text-white p-20">Item 4</div>
        <div className="bg-purple-500 text-white p-20">Item 5</div>

        {/* Row 2 */}
        <div className="bg-indigo-500 text-white p-20">Item 6</div>
        <div className="bg-blue-500 text-white p-20">Item 7</div>
        <div className="bg-green-500 text-white p-20">Item 8</div>
        <div className="bg-red-500 text-white p-20">Item 9</div>
        <div className="bg-yellow-500 text-white p-20">Item 10</div>

        {/* Row 3 */}
        <div className="bg-purple-500 text-white p-20">Item 11</div>
        <div className="bg-indigo-500 text-white p-20">Item 12</div>
        <div className="bg-blue-500 text-white p-20">Item 13</div>
        <div className="bg-green-500 text-white p-20">Item 14</div>
        <div className="bg-red-500 text-white p-20">Item 15</div>

        {/* Row 4 */}
        <div className="bg-yellow-500 text-white p-20">Item 16</div>
        <div className="bg-purple-500 text-white p-20">Item 17</div>
        <div className="bg-indigo-500 text-white p-20">Item 18</div>
        <div className="bg-blue-500 text-white p-20">Item 19</div>
        <div className="bg-green-500 text-white p-20">Item 20</div>

        {/* Row 5 */}
        <div className="bg-red-500 text-white p-20">Item 21</div>
        <div className="bg-yellow-500 text-white p-20">Item 22</div>
        <div className="bg-purple-500 text-white p-20">Item 23</div>
        <div className="bg-indigo-500 text-white p-20">Item 24</div>
        <div className="bg-blue-500 text-white p-20">Item 25</div>
      </div>
    </div>
  );
};
