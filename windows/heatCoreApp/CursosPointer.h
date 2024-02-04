#pragma once

#include "pch.h"
#include "NativeModules.h"

#include "winrt/Windows.Foundation.h"
#include "winrt/Windows.UI.h"
#include "winrt/Windows.UI.Core.h"
#include "winrt/Windows.UI.ViewManagement.h"
#include "winrt/Windows.ApplicationModel.Core.h"
#include "winrt/Windows.ApplicationModel.Activation.h"


using namespace winrt;
using namespace xaml;
using namespace xaml::Controls;
using namespace xaml::Navigation;

using namespace Windows::UI;
using namespace Windows::UI::Core;
using namespace Windows::UI::ViewManagement;
using namespace Windows::ApplicationModel::Core;

namespace RN = winrt::Microsoft::ReactNative;

namespace MousePointerModule
{
  REACT_MODULE(MousePointer,L"mousePointer");
  struct MousePointer
  {

    RN::ReactContext context;

    REACT_INIT(Initialize,L"init");
    void Initialize(const RN::ReactContext& reactContext) noexcept
    {
        context = reactContext;
    }

    REACT_METHOD(Cursor, L"cursor");
    void Cursor(hstring cursorType, const RN::ReactPromise<void> promise) noexcept
    {
        try {       
            auto jsDispatcher = context.JSDispatcher();
            context.UIDispatcher().Post([cursorType,jsDispatcher, promise] {
                CoreWindow window = Window::Current().CoreWindow();

                CoreCursorType desiredCursorType = CoreCursorType::Arrow;  // Padrão para Arrow se não corresponder a nenhum tipo
                
                if (cursorType == L"hand") {
                    desiredCursorType = CoreCursorType::Hand;
                }
                else if (cursorType == L"cross") {
                    desiredCursorType = CoreCursorType::Cross;
                }
                else if (cursorType == L"arrow") {
                    desiredCursorType = CoreCursorType::Arrow;
                }
                else if (cursorType == L"help") {
                    desiredCursorType = CoreCursorType::Help;
                }
                else if (cursorType == L"wait") {
                    desiredCursorType = CoreCursorType::Wait;
                }
                else if (cursorType == L"person") {
                    desiredCursorType = CoreCursorType::Person;
                }
                else if (cursorType == L"ibeam") {
                    desiredCursorType = CoreCursorType::IBeam;
                }
                else if (cursorType == L"pin") {
                    desiredCursorType = CoreCursorType::Pin;
                }
                else if (cursorType == L"sizeAll") {
                    desiredCursorType = CoreCursorType::SizeAll;
                }
                else if (cursorType == L"sizeNortheastSouthwest") {
                    desiredCursorType = CoreCursorType::SizeNortheastSouthwest;
                }
                else if (cursorType == L"sizeNorthSouth") {
                    desiredCursorType = CoreCursorType::SizeNorthSouth;
                }
                else if (cursorType == L"sizeNorthwestSoutheast") {
                    desiredCursorType = CoreCursorType::SizeNorthwestSoutheast;
                }
                else if (cursorType == L"sizeNorthwestSoutheast") {
                    desiredCursorType = CoreCursorType::SizeNorthwestSoutheast;
                }
                else if (cursorType == L"sizeWestEast") {
                    desiredCursorType = CoreCursorType::SizeWestEast;
                }
                else if (cursorType == L"universalNo") {
                    desiredCursorType = CoreCursorType::UniversalNo;
                }
                else if (cursorType == L"upArrow") {
                    desiredCursorType = CoreCursorType::UpArrow;
                }

                CoreCursor cursor(desiredCursorType, 0);
                window.PointerCursor(cursor);
                jsDispatcher.Post([promise] { promise.Resolve(); });
            });
        }
        catch (const hresult_error& ex) {
            promise.Reject(RN::ReactError{ winrt::to_string(ex.message()).c_str() });
        }
    }

  };
}